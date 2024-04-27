window.jest_html_reporters_callback__({"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":4,"numPassedTests":14,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":4,"numTotalTests":14,"startTime":1714177147011,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1714177151079,"runtime":3861,"slow":false,"start":1714177147218},"testFilePath":"/home/runner/work/jest-api-tests/jest-api-tests/test/tests/register.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ReqRes API Register endpoints"],"duration":469,"failureMessages":[],"fullName":"ReqRes API Register endpoints POST to /register with valid data should return status 200 and the registration id and token","status":"passed","title":"POST to /register with valid data should return status 200 and the registration id and token"},{"ancestorTitles":["ReqRes API Register endpoints"],"duration":336,"failureMessages":[],"fullName":"ReqRes API Register endpoints POST to /register with missing password should return status 400 and the validation error","status":"passed","title":"POST to /register with missing password should return status 400 and the validation error"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1714177151434,"runtime":4195,"slow":false,"start":1714177147239},"testFilePath":"/home/runner/work/jest-api-tests/jest-api-tests/test/tests/colors.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ReqRes API Colors endpoints"],"duration":442,"failureMessages":[],"fullName":"ReqRes API Colors endpoints GET to /colors should return status 200 and a list of colors","status":"passed","title":"GET to /colors should return status 200 and a list of colors"},{"ancestorTitles":["ReqRes API Colors endpoints"],"duration":364,"failureMessages":[],"fullName":"ReqRes API Colors endpoints GET to /colors/id for an existing color should return status 200 and the color data","status":"passed","title":"GET to /colors/id for an existing color should return status 200 and the color data"},{"ancestorTitles":["ReqRes API Colors endpoints"],"duration":322,"failureMessages":[],"fullName":"ReqRes API Colors endpoints GET to /colors/id for a color that does not exist should return status 404","status":"passed","title":"GET to /colors/id for a color that does not exist should return status 404"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1714177151815,"runtime":730,"slow":false,"start":1714177151085},"testFilePath":"/home/runner/work/jest-api-tests/jest-api-tests/test/tests/login.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ReqRes API Login endpoints"],"duration":319,"failureMessages":[],"fullName":"ReqRes API Login endpoints POST to /login with valid data should return status 200 and the login token","status":"passed","title":"POST to /login with valid data should return status 200 and the login token"},{"ancestorTitles":["ReqRes API Login endpoints"],"duration":310,"failureMessages":[],"fullName":"ReqRes API Login endpoints POST to /login with missing password should return status 400 and the validation error","status":"passed","title":"POST to /login with missing password should return status 400 and the validation error"}]},{"numFailingTests":0,"numPassingTests":7,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1714177152175,"runtime":4966,"slow":false,"start":1714177147209},"testFilePath":"/home/runner/work/jest-api-tests/jest-api-tests/test/tests/users.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ReqRes API Users endpoints"],"duration":145,"failureMessages":[],"fullName":"ReqRes API Users endpoints GET to /users should return status 200 and a list of users","status":"passed","title":"GET to /users should return status 200 and a list of users"},{"ancestorTitles":["ReqRes API Users endpoints"],"duration":25,"failureMessages":[],"fullName":"ReqRes API Users endpoints GET to /users/id for an existing user should return status 200 and the user data","status":"passed","title":"GET to /users/id for an existing user should return status 200 and the user data"},{"ancestorTitles":["ReqRes API Users endpoints"],"duration":330,"failureMessages":[],"fullName":"ReqRes API Users endpoints GET to /users/id for a user that does not exist should return status 404","status":"passed","title":"GET to /users/id for a user that does not exist should return status 404"},{"ancestorTitles":["ReqRes API Users endpoints"],"duration":341,"failureMessages":[],"fullName":"ReqRes API Users endpoints POST to /users with valid data should return status 201 and the user data","status":"passed","title":"POST to /users with valid data should return status 201 and the user data"},{"ancestorTitles":["ReqRes API Users endpoints"],"duration":329,"failureMessages":[],"fullName":"ReqRes API Users endpoints PUT to /users/id for an existing user with valid data should return status 200 and the user data","status":"passed","title":"PUT to /users/id for an existing user with valid data should return status 200 and the user data"},{"ancestorTitles":["ReqRes API Users endpoints"],"duration":341,"failureMessages":[],"fullName":"ReqRes API Users endpoints PATCH to /users/id for an existing user with valid data should return status 200 and the user data","status":"passed","title":"PATCH to /users/id for an existing user with valid data should return status 200 and the user data"},{"ancestorTitles":["ReqRes API Users endpoints"],"duration":362,"failureMessages":[],"fullName":"ReqRes API Users endpoints DELETE to /users/id for an existing user should return status 204","status":"passed","title":"DELETE to /users/id for an existing user should return status 204"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":true,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"/home/runner/work/jest-api-tests/jest-api-tests/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/runner/work/jest-api-tests/jest-api-tests/node_modules/jest-html-reporters/index.js",{"publicPath":"./reports","filename":"index.html"}]],"rootDir":"/home/runner/work/jest-api-tests/jest-api-tests","runTestsByPath":false,"seed":-2130185259,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/runner/work/jest-api-tests/jest-api-tests/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"none","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1714177152207,"_reporterOptions":{"publicPath":"./reports","filename":"index.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})