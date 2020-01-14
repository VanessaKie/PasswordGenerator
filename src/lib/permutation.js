import React from 'react';
import {numbersArray, SPECIAL} from './chars';

export const CalcPw = (special, pw) => {
const CHARS = [...numbersArray, ...special];
const realPw = pw;

const possiblePW = [];
    for (let i = 0; i < CHARS.length; i ++){
        for (let j = 0; j < CHARS.length; j++){
            for (let k= 0; k < CHARS.length; k++){
                for (let l = 0; l < CHARS.length; l++){
                    let generatePw = [CHARS[l], CHARS[k], CHARS[j], CHARS[i]];
                    possiblePW.push(generatePw.join(''))
                }
            }
        }
    }

    let output = '';

    possiblePW.forEach(el => el === realPw ? output = el : null)

    return output
   /*  return (
        <>
            <RandomPw possible={possiblePW} />
        </>
    ) */
}

export const randomPw = (props) => {
    const CHARS = [...numbersArray, ...props]
    let password = '';
        for (let i =0; i < 4; i++){
            const RANDOM = Math.floor(Math.random() * CHARS.length);
            password += CHARS[RANDOM];
        }
  
    return (password);
   /*  return <>
        {console.log('password', password)}
        <GetPw random={password} possible={possible} />
        </> */
}
/* 
export const GetPw = (props) => {
    const thePW = props.random;
    const possible = props.possible;
    let output = '';

    possible.forEach(el => el === thePW ? output = el : null)

    return output
    /* return( 
        <> 
            {console.log('the PW', thePW)}
            {console.log('possible', possible)}
            {console.log('output', output)}
            <p>the password is {output}</p>

        </>
    ) 

}
 */

