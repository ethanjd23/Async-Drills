// Timing Out
function logMessage(message) {
    console.log(message);
};
// logMessage("Hey");
// setTimeout(() => logMessage("Hey, I waited"), 2000);

let wordArray = ["une", "deux", "tres", "quatre"];
function getWords([word1, word2, word3, word4]) {
    console.log(word1);
    setTimeout(function(word2) {
        console.log(word2);
        setTimeout(function(word3) {
            console.log(word3);
            setTimeout(function(word4) {
                console.log(word4);
            }, 1000);
        }, 2000);
    }, 3000);
}
// getWords(wordArray);

// Callbacks and Recursion
function done() {
    console.log("Job's done!");
}
function countdown(num, callback) {
    if (num == 0) {
        setTimeout(function() {
            callback();
        }, 1000)
    } else {
        setTimeout(function() {
            console.log(num + " seconds");
            num--;
            countdown(num, callback);
        }, 1000);
    };
};

countdown(6, done);