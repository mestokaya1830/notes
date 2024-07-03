// C++ code
//
int buzzer = 440;


void setup()
{
  pinMode(2, OUTPUT);
}

void loop()
{
 
  tone(2, buzzer * 2);
  delay(1000); // Wait for 250 millisecond(s)
  tone(2, buzzer *4);
  delay(1000);
}