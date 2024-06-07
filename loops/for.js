for (let i = 1; i < 10; i++) {
    const element =i;
    console.log(element);  
}
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('found it number 5')
        continue 
        // break
    }
    console.log(`total value is ${i}`);  
}