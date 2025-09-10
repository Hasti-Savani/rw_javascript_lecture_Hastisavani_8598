/* Javascript String Methods */

/* String.replace() */

// Syntax:-
// replace(pattern, replacement)
// replaceAll(pattern, replacement)

{
    let str = "The quick brown fox jumps over the lazy dog"
    let regex = /fox/g
    let regex1 = /over/g

    // let result = str.replace(regex, "bear")
    let result1 = str.replaceAll(regex1, "under")

    // console.log(result);
    console.log(result1);
}

// -> In Replace all (i)function in not work

