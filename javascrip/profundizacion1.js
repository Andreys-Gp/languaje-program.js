    /* Expreciones regulares */

    let cadena = "inDolore Duis ut nisi nostrud excepteur in. Voluptate adipisicing id veniam incididunt aliqua proident fugiat nisi culpa voluptate tempor proident labore. Dolore anim eiusmod et aliquip adipisicing excepteur labore sunt consectetur. ";
    let expReg = new RegExp("dolore", "ig");
    let expReg2 = /dolore/ig;
    console.log(expReg.test(cadena));
    console.log(expReg.exec(cadena));

    console.log(expReg2.test(cadena));
    console.log(expReg2.exec(cadena));

    /*  funciones anonimas autoejecutables */

    (function () {
        console.log("mi primer IIFE");
    })();

    /*  (function (d, w, C) {
         console.log("mi segunda IIEF");
         console.log(d);
         console.log(w);
         C.log("esto es un console");
     })(document, window, console); */

    /*  tipos de declaracion funciones anonimas
     */
    /*  clasica */
    (function () {
        console.log("vercion clasica");
    })();
    /* unaria */
    +
    function () {
        console.log("Version unaria");
    }();
    /* version crockford */
    ((function () {
        console.log("vercion crockford");
    })());
    /* facebook */
    ! function () {
        console.log("version facebook");
    }();

    