#!/usr/bin/env node
(function main(argc) {
    argc = argc.slice(2);
    if (argc.length > 0) {
        console.log("args in use");
    }
    return 0;
})(process.argv);
