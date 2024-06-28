// C++ code
//
int potan = 0;

void setup()
{
  pinMode(A0, INPUT);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  potan = analogRead(A0);
  if (potan < 100) {
    digitalWrite(2, LOW);
  }
  if (potan > 100 && potan < 255) {
    digitalWrite(2, HIGH);
  } else {
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  }
  delay(10); 
  if (potan > 255 && potan < 500) {
    digitalWrite(3, HIGH);
  } else {
    digitalWrite(2, LOW);
    digitalWrite(4, LOW);
  }
  delay(10); 
  if (potan > 500 && potan < 1100) {
    digitalWrite(4, HIGH);
  } else {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
  }
  delay(10); 
  Serial.println(potan);
  delay(10); // Delay a little bit to improve simulation performance
}