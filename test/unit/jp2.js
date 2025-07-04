// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const fs = require('fs');
const assert = require('assert');

const sharp = require('../../');
const fixtures = require('../fixtures');

describe('JP2 output', () => {
  if (!sharp.format.jp2k.input.buffer) {
    it('JP2 output should fail due to missing OpenJPEG', () =>
      assert.rejects(async () =>
        sharp(fixtures.inputJpg)
          .jp2()
          .toBuffer(),
      /JP2 output requires libvips with support for OpenJPEG/
      )
    );

    it('JP2 file output should fail due to missing OpenJPEG', () =>
      assert.rejects(async () => sharp(fixtures.inputJpg).toFile('test.jp2'),
        /JP2 output requires libvips with support for OpenJPEG/
      )
    );

    it('File with JP2-like suffix should not fail due to missing OpenJPEG', () => {
      const output = fixtures.path('output.failj2c');
      return assert.doesNotReject(
        async () => sharp(fixtures.inputPngWithOneColor).toFile(output)
      );
    });
  } else {
    it('JP2 Buffer to PNG Buffer', () => {
      sharp(fs.readFileSync(fixtures.inputJp2))
        .resize(8, 15)
        .png()
        .toBuffer({ resolveWithObject: true })
        .then(({ data, info }) => {
          assert.strictEqual(true, data.length > 0);
          assert.strictEqual(data.length, info.size);
          assert.strictEqual('png', info.format);
          assert.strictEqual(8, info.width);
          assert.strictEqual(15, info.height);
          assert.strictEqual(4, info.channels);
        });
    });

    it('JP2 quality', function (done) {
      sharp(fixtures.inputJp2)
        .resize(320, 240)
        .jp2({ quality: 70 })
        .toBuffer(function (err, buffer70) {
          if (err) throw err;
          sharp(fixtures.inputJp2)
            .resize(320, 240)
            .toBuffer(function (err, buffer80) {
              if (err) throw err;
              assert(buffer70.length < buffer80.length);
              done();
            });
        });
    });

    it('Without chroma subsampling generates larger file', function (done) {
      // First generate with chroma subsampling (default)
      sharp(fixtures.inputJp2)
        .resize(320, 240)
        .jp2({ chromaSubsampling: '4:2:0' })
        .toBuffer(function (err, withChromaSubsamplingData, withChromaSubsamplingInfo) {
          if (err) throw err;
          assert.strictEqual(true, withChromaSubsamplingData.length > 0);
          assert.strictEqual(withChromaSubsamplingData.length, withChromaSubsamplingInfo.size);
          assert.strictEqual('jp2', withChromaSubsamplingInfo.format);
          assert.strictEqual(320, withChromaSubsamplingInfo.width);
          assert.strictEqual(240, withChromaSubsamplingInfo.height);
          // Then generate without
          sharp(fixtures.inputJp2)
            .resize(320, 240)
            .jp2({ chromaSubsampling: '4:4:4' })
            .toBuffer(function (err, withoutChromaSubsamplingData, withoutChromaSubsamplingInfo) {
              if (err) throw err;
              assert.strictEqual(true, withoutChromaSubsamplingData.length > 0);
              assert.strictEqual(withoutChromaSubsamplingData.length, withoutChromaSubsamplingInfo.size);
              assert.strictEqual('jp2', withoutChromaSubsamplingInfo.format);
              assert.strictEqual(320, withoutChromaSubsamplingInfo.width);
              assert.strictEqual(240, withoutChromaSubsamplingInfo.height);
              assert.strictEqual(true, withChromaSubsamplingData.length <= withoutChromaSubsamplingData.length);
              done();
            });
        });
    });

    it('can use the jp2Oneshot option to handle multi-part tiled JPEG 2000 file', async () => {
      const outputJpg = fixtures.path('output.jpg');
      await assert.rejects(
        () => sharp(fixtures.inputJp2TileParts).toFile(outputJpg)
      );
      await assert.doesNotReject(async () => {
        await sharp(fixtures.inputJp2TileParts, { jp2Oneshot: true }).toFile(outputJpg);
        const { format, width, height } = await sharp(outputJpg).metadata();
        assert.strictEqual(format, 'jpeg');
        assert.strictEqual(width, 320);
        assert.strictEqual(height, 240);
      });
    });

    it('Invalid JP2 chromaSubsampling value throws error', () => {
      assert.throws(
        () => sharp().jp2({ chromaSubsampling: '4:2:2' }),
        /Expected one of 4:2:0, 4:4:4 but received 4:2:2 of type string/
      );
    });
  }

  it('valid JP2 oneshot value does not throw error', () => {
    assert.doesNotThrow(
      () => sharp({ jp2: { oneshot: true } })
    );
  });

  it('invalid JP2 oneshot value throws error', () => {
    assert.throws(
      () => sharp({ jp2: { oneshot: 'fail' } }),
      /Expected boolean for jp2.oneshot but received fail of type string/
    );
  });
});
