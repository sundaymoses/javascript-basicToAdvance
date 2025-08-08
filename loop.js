function loop() {
    const totalNumbers = 524288;
    const totalTime = 10000; // 10 seconds in milliseconds
    const interval = totalTime / totalNumbers; // Time between each print

    for (let i = 1; i <= totalNumbers; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * interval);
    }
}
loop();