// C++ code
//
void setup()
{
  pinMode(3, INPUT);
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop()
{
  Serial.println(digitalRead(10));
  if (digitalRead(3) == 1) {
    digitalWrite(13, HIGH);
  } else {
    digitalWrite(13, LOW);
  }
  delay(10); // Delay a little bit to improve simulation performance
}
