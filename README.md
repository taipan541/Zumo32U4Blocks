# Zumo32U4Blocks
This is a fork for Zumo32U4Blocks from jwill @ https://github.com/jwill4/Zumo32U4Blocks

This is an extension of his work, with more sensor interactions.

Background:
We are educators in Singapore teaching zumo bots to young kids. This zumo blocks extension will help kids to understand programming easier. Check us out at www.relsig.com

Instructions:
*similar to jwill's*

To use Zumo 32U4 blocks in Blocklyduino you need 4 things:

1. Blocklyduino installed on your local computer (see https://github.com/BlocklyDuino/BlocklyDuino)
2. this zumo32U4.js file in Blocklyduino\blockly\blocks
3. another zumo32U4.js file (included in this repository) for building code in Blocklyduino\blockly\generators
4. add the following to the end of index.html file in Blocklyduino\blockly\apps\blocklyduino\

`<category name="Zumo">
	<block type="output_leftzmotor"></block>
	<block type="output_rightzmotor"></block>
	<block type="output_bothzmotor"></block>
	<block type="zprox_sense"></block>
	<block type="read_prox_sense"></block>
	<block type="line_sense"></block>
	<block type="read_line_sense"></block>
	<block type="button_a"></block>
	<block type="button_b"></block>
	<block type="button_c"></block>
	<block type="lcd_clear"></block>
	<block type="lcd_string"></block>
	<block type="lcd_number"></block>
	<block type="buzzer_play"></block>
	<block type="buzzer_stop"></block>
</category>`
