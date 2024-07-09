// C++ code
//
#define INCREAMENT 2
#define DECREAMENT 3
int counter = 0;
void setup()
{
	pinMode(INCREAMENT, INPUT);
  	pinMode(DECREAMENT, INPUT);
  	Serial.begin(9600);
}

void loop()
{
  if(digitalRead(INCREAMENT) == 1){
  	counter++;
  }
  if(digitalRead(DECREAMENT) == 1){
  	counter--;
  }
  Serial.println(counter);
  delay(1000); // Delay a little bit to improve simulation performance
}