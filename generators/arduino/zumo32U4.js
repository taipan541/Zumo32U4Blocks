goog.provide('Blockly.Arduino.custom');

goog.require('Blockly.Arduino');

/* generate code to drive motors */
Blockly.Arduino['output_leftzmotor'] = function() {
  var dropdown_direction = this.getFieldValue('Direction');
  var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_Zumo32U4Motors'] = '#include <Zumo32U4Motors.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4Motors'] = 'Zumo32U4Motors motors;\n';

  if(dropdown_direction == "FORWARD"){
    var code = 'motors.setLeftSpeed('+value_speed+');\n';
  } else {
    var code = 'motors.setLeftSpeed(-'+value_speed+');\n';
  }

return code;
};

Blockly.Arduino['output_rightzmotor'] = function() {
  var dropdown_direction = this.getFieldValue('Direction');
  var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_Zumo32U4Motors'] = '#include <Zumo32U4Motors.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4Motors'] = 'Zumo32U4Motors motors;\n';


  if(dropdown_direction == "FORWARD"){
    var code = 'motors.setRightSpeed('+value_speed+');\n';
  } else {
    var code = 'motors.setRightSpeed(-'+value_speed+');\n';
  }

return code;
};

/* generate code to read proximity sensors */
Blockly.Arduino['zprox_sense'] = function() {
  var dropdown_sensor = this.getFieldValue('SENSOR');

  Blockly.Arduino.definitions_['define_Zumo32U4ProximitySensors'] = '#include <Zumo32U4ProximitySensors.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4ProximitySensors'] = 'Zumo32U4ProximitySensors proxSensors;\n';
  Blockly.Arduino.setups_['setup_init_sensors'] = 'proxSensors.initThreeSensors();\n';

  if(dropdown_sensor == "FRONT_LEFT") {
    var code =  'proxSensors.countsFrontWithLeftLeds()';
  }
  if(dropdown_sensor == "FRONT_RIGHT") {
    var code =  'proxSensors.countsFrontWithRightLeds()';
  }
  if(dropdown_sensor == "SIDE_LEFT") {
   	var code =  'proxSensors.countsLeftWithLeftLeds()';
  }
  if(dropdown_sensor == "SIDE_RIGHT") {
    var code =  'proxSensors.countsRightWithRightLeds()';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['read_prox_sense'] = function() {
	var code = 'proxSensors.read();\n';
	
	return code;
};

/* generate code to read line sensors */
Blockly.Arduino['line_sense'] = function() {
  var dropdown_sensor = this.getFieldValue('SENSOR');

  Blockly.Arduino.definitions_['define_Zumo32U4LineSensors'] = '#include <Zumo32U4LineSensors.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4LineSensors'] = 'Zumo32U4LineSensors lineSensors;\n';
  Blockly.Arduino.definitions_['arr_Zumo32U4LineSensors'] = 'uint16_t lineSensorValues[5];\n';
  Blockly.Arduino.setups_['setup_init_sensors_line'] = 'lineSensors.initFiveSensors();\n';

  if(dropdown_sensor == "SENSOR_0") {
    var code =  'lineSensorValues[0]';
  }
  if(dropdown_sensor == "SENSOR_1") {
    var code =  'lineSensorValues[1]';
  }
  if(dropdown_sensor == "SENSOR_2") {
    var code =  'lineSensorValues[2]';
  }
  if(dropdown_sensor == "SENSOR_3") {
    var code =  'lineSensorValues[3]';
  }
  if(dropdown_sensor == "SENSOR_4") {
    var code =  'lineSensorValues[4]';
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['read_line_sense'] = function() {
	var code = 'lineSensors.read(lineSensorValues);\n';
	
	return code;
};

/* generate code for Button reading */
Blockly.Arduino['button_a'] = function() {

  Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4_ButtonA'] = 'Zumo32U4ButtonA buttona;\n';

  var code = 'buttona.getSingleDebouncedPress()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['button_b'] = function() {

  Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4_ButtonB'] = 'Zumo32U4ButtonB buttonb;\n';

  var code = 'buttonb.getSingleDebouncedPress()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['button_c'] = function() {

  Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4_ButtonC'] = 'Zumo32U4ButtonC buttonc;\n';

  var code = 'buttonc.getSingleDebouncedPress()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['lcd_clear'] = function() {

  Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4_LCD'] = 'Zumo32U4LCD lcd;\n';

  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['lcd_string'] = function() {
  var text_lcd_string = this.getFieldValue('LCD_STRING');

  Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4_LCD'] = 'Zumo32U4LCD lcd;\n';

  var code = 'lcd.print("'+text_lcd_string+'");\n';
  return code;
};

Blockly.Arduino['lcd_number'] = function() {
  var value_lcd_number = Blockly.Arduino.valueToCode(this, 'lcd_number', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
  Blockly.Arduino.definitions_['var_Zumo32U4_LCD'] = 'Zumo32U4LCD lcd;\n';

  var code = 'lcd.print('+value_lcd_number+');\n';
  return code;
};
/* generate code for Buzzer */
Blockly.Arduino['buzzer_play'] = function() {
    Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
    Blockly.Arduino.definitions_['var_Zumo32U4_buzzer'] = 'Zumo32U4Buzzer buzzer;\n';
	
	var dropdown_note = this.getFieldValue('NOTE');
	var octave = Blockly.Arduino.valueToCode(this, 'OCTAVE', Blockly.Arduino.ORDER_ATOMIC);
	var durationSec = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
	var volume = Blockly.Arduino.valueToCode(this, 'VOLUME', Blockly.Arduino.ORDER_ATOMIC);
	
	var code = 'buzzer.playNote(';
	
	if(dropdown_note == 'SILENT') {
		code += 'SILENT_NOTE';
	}
	else {
		code += 'NOTE_' + dropdown_note;
		code += '(' + octave + ')';
	}
	
	code += ', ';
	code += (durationSec * 1000);
	code += ', ';
	code += volume + ');\n';
	
	return code;
};
Blockly.Arduino['buzzer_stop'] = function() {
    Blockly.Arduino.definitions_['define_Zumo32U4'] = '#include <Zumo32U4.h>\n';
    Blockly.Arduino.definitions_['var_Zumo32U4_buzzer'] = 'Zumo32U4Buzzer buzzer;\n';
	
    var code = 'buzzer.stopPlaying();\n';
	
    return code;
};