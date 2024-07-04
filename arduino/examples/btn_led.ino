// C++ code
//
int state = 0;

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  if (digitalRead(2) == 1) {
    while (!(digitalRead(2) == 0)) {
    }
    if (state == 0) {
      state = 1;
      digitalWrite(3, HIGH);
    } else {
      state = 0;
      digitalWrite(3, LOW);
    }
  }
  Serial.println(state);
  delay(10); // Delay a little bit to improve simulation performance
}