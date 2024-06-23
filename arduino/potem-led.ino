// C++ code
//
int poten = 0;

void setup()
{
  pinMode(A0, INPUT);
  pinMode(2, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  poten = map(analogRead(A0), 0, 1023, 0, 255);
  analogWrite(2, poten);
  analogWrite(3, poten);
  Serial.println(poten);
  delay(10); // Delay a little bit to improve simulation performance
}