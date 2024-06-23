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
  tone(2, analogRead(A0));
  Serial.println(analogRead(A0));
  delay(10); // Delay a little bit to improve simulation performance
}