// C++ code
//

void setup()
{
  pinMode(A0, INPUT);
  pinMode(2, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  if(analogRead(A0) > 100){
  	tone(2, analogRead(A0));
  } else {
  	noTone(2);
  }
  Serial.println(analogRead(A0));
  Serial.println(digitalRead(2));
  delay(10); // Delay a little bit to improve simulation performance
}