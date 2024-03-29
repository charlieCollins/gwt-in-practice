package com.manning.gwtip.calculator.client;

import junit.framework.Assert;

import com.manning.gwtip.calculator.client.controller.CalculatorController;
import com.manning.gwtip.calculator.client.model.CalculatorChangeListener;
import com.manning.gwtip.calculator.client.model.CalculatorData;
import com.manning.gwtip.calculator.test.AbstractTestCase;
import com.manning.gwtip.calculator.test.TestConstants;


public class CalculatorSimpleMultiplyTest extends AbstractTestCase {
    //  data
    CalculatorData results = new CalculatorData();

    public void test() {
//      instantiate data and controller
        CalculatorData data = new CalculatorData();
        data.addChangeListener(new CalculatorChangeListener() {
                public void onChange(CalculatorData data) {
                    results = data;
                }
            });
        CalculatorController controller = new CalculatorController(data);

        controller.processDigit("1");
        controller.processOperator(TestConstants.OP_MULTIPLY);
        controller.processDigit("3");
        controller.processEquals();
        Assert.assertEquals("3.0", results.getDisplay());
        controller.processClear();

        controller.processDigit("1");
        controller.processOperator(TestConstants.OP_MULTIPLY);
        controller.processDigit(".");
        controller.processDigit("3");
        controller.processEquals();
        Assert.assertEquals("0.3", results.getDisplay());
        controller.processClear();

        controller.processDigit("1");
        controller.processDigit(".");
        controller.processDigit("75");
        controller.processOperator(TestConstants.OP_MULTIPLY);
        controller.processDigit("3");
        controller.processDigit(".");
        controller.processDigit(".");
        controller.processDigit("25");
        controller.processEquals();
        Assert.assertEquals("5.6875", results.getDisplay());
        controller.processClear();
    }
}
