'use strict';

var sharecore = module.exports;

// module information
sharecore.version = 'v' + require('./package.json').version;
sharecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of sharecore-lib found. ' +
      'Please make sure to require sharecore-lib and check that submodules do' +
      ' not also include their own sharecore-lib dependency.';
    throw new Error(message);
  }
};
sharecore.versionGuard(global._sharecore);
global._sharecore = sharecore.version;

// crypto
sharecore.crypto = {};
sharecore.crypto.BN = require('./lib/crypto/bn');
sharecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
sharecore.crypto.Hash = require('./lib/crypto/hash');
sharecore.crypto.Random = require('./lib/crypto/random');
sharecore.crypto.Point = require('./lib/crypto/point');
sharecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
sharecore.encoding = {};
sharecore.encoding.Base58 = require('./lib/encoding/base58');
sharecore.encoding.Base58Check = require('./lib/encoding/base58check');
sharecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
sharecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
sharecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
sharecore.util = {};
sharecore.util.buffer = require('./lib/util/buffer');
sharecore.util.js = require('./lib/util/js');
sharecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
sharecore.errors = require('./lib/errors');

// main bitcoin library
sharecore.Address = require('./lib/address');
sharecore.Block = require('./lib/block');
sharecore.MerkleBlock = require('./lib/block/merkleblock');
sharecore.BlockHeader = require('./lib/block/blockheader');
sharecore.HDPrivateKey = require('./lib/hdprivatekey.js');
sharecore.HDPublicKey = require('./lib/hdpublickey.js');
sharecore.Networks = require('./lib/networks');
sharecore.Opcode = require('./lib/opcode');
sharecore.PrivateKey = require('./lib/privatekey');
sharecore.PublicKey = require('./lib/publickey');
sharecore.Script = require('./lib/script');
sharecore.Transaction = require('./lib/transaction');
sharecore.URI = require('./lib/uri');
sharecore.Unit = require('./lib/unit');

// dependencies, subject to change
sharecore.deps = {};
sharecore.deps.bnjs = require('bn.js');
sharecore.deps.bs58 = require('bs58');
sharecore.deps.Buffer = Buffer;
sharecore.deps.elliptic = require('elliptic');
sharecore.deps.scryptsy = require('scryptsy');
sharecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
sharecore.Transaction.sighash = require('./lib/transaction/sighash');
