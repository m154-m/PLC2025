ask :: String -> IO ()
ask prompt =
  do
  putStrLn prompt
  line <- getLine
  if line == ""
    then ask ( prompt ++ "!")
    else if line == "quit"
      then putStrLn "quitting..."    
    else putStrLn ("you said: " ++ reverse line)

-- ii) checks if the input is "quit" and exits the loop after displaying "quitting..." (lines 8&9)
-- iii) promt for recurssion: if empty, then promt, again (++) conctanate ! (line 7)
 
main :: IO ()
main =
  do
  let prompt = "please say something"
  ask prompt