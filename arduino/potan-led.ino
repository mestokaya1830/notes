// C++ code
//
int poten = 0;

void setup()
{
  pinMode(A0, INPUT);
  pinMode(3, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  poten = map(analogRead(A0), 0, 1023, 0, 255);
  analogWrite(3, poten);
  Serial.println(poten);
  delay(10); // Delay a little bit to improve simulation performance
}