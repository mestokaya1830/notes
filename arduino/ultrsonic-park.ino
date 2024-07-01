// C++ code
//
int sensor = 0;

long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);  // Clear the trigger
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  // Sets the trigger pin to HIGH state for 10 microseconds
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  // Reads the echo pin, and returns the sound wave travel time in microseconds
  return pulseIn(echoPin, HIGH);
}

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  sensor = 0.01723 * readUltrasonicDistance(4, 5);
  if(sensor > 20 && sensor < 100){
    tone(2, 3000);
  } else if(sensor < 20){
    tone(2, 3000, 200);
    delay(200);
  } else {
  	noTone(2);
  }
  Serial.println(sensor);
  delay(200); // Delay a little bit to improve simulation performance
}