module Main where

main =
    do
    print (myFunc1 5)
    print (myFunc2 10)
    print (_3rdFunc)

-- function names must start with lowercase or underscore and only contain letters, digits, underscore, or apostrophe.
myFunc1 x = x*10
myFunc2 x = x*2   
_3rdFunc = "Hello, this is 3rd Func"