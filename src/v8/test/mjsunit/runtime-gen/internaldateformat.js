// Copyright 2014 the V8 project authors. All rights reserved.
// AUTO-GENERATED BY tools/generate-runtime-tests.py, DO NOT MODIFY
// Flags: --allow-natives-syntax --harmony
var arg0 = %GetImplFromInitializedIntlObject(new Intl.DateTimeFormat('en-US'));
var _date = new Date();
%InternalDateFormat(arg0, _date);
