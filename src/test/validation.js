const valid = (data, identifier) => {
    var k = 1;
    let len = data.length;
    let error = "";
    console.log(len)
    var j = 0;
    if (identifier === 0) {
        if (len <= 256 && len >= 0) {
            while (k === 1) {
                if (len >= j) {
                    if (data[j] === "@") {
                        if (len >= j) {
                            while (k === 1) {
                                if (len >= j) {
                                    console.log(data[j])
                                    if (data[j] === ".") {
                                        if (len > j + 1) {
                                            console.log("varified");
                                            k = 0;
                                        } else {
                                            error = "230"
                                            console.log("domain not found code: " + error);
                                            k = 0;
                                        }
                                    } else {
                                        j = j + 1;
                                        error = "300"
                                        console.log("error . found not found code: " + error);
                                        if (len === j) {
                                            k = 0;
                                        }
                                    }
                                }
                                else {
                                    error = "504"
                                    console.log("after @ length not found error code: " + error);
                                    if (len === j) {
                                        k = 0;
                                    }
                                }
                            }

                        } else {
                            k = 0;
                            error = "604"
                            console.log("after @ length error code: " + error);
                        }
                    }
                } else {
                    error = "704"
                    console.log("@ found error code: " + error);
                    k = 0;
                }
                j = j + 1;
            }
        } else {
            error = "875"
            console.log("Length code: " + error)
        }

    }
    // if (identifier === 1) {
    //     let len = data.length;
    //     console.log("pass 2"+len);
    //     let j = 0;
    //     let k = 0;
    //     if (len >= 8) {
    //         while (k === 0) {
    //             if (!isNaN(Number(data[j]))) {
    //                 console.log(" pass okay "+j)
    //                 j = j + 1
    //                 if (len === j) {
    //                     k = 1;
    //                 }
    //             } else {
    //                 j = j + 1
    //                 console.log(Number(data[j]))
    //                 if (len === j) {
    //                     k = 1;
    //                 }
    //             }
    //         }
    //     }
    // }

}

export default valid;