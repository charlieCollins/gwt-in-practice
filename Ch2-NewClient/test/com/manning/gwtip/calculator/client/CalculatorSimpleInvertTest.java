package com.manning.gwtip.calculator.client;

import junit.framework.Assert;

import com.manning.gwtip.calculator.client.controller.CalculatorController;
import com.manning.gwtip.calculator.client.model.CalculatorChangeListener;
import com.manning.gwtip.calculator.client.model.CalculatorData;
import com.manning.gwtip.calculator.test.AbstractTestCase;
import com.manning.gwtip.calculator.test.TestConstants;


public class CalculatorSimpleInvertTest extends AbstractTestCase {
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
        controller.processOperator(TestConstants.OP_INVERT);        
        Assert.assertEquals("-1.0", results.getDisplay());
        controller.processClear();

        
    }
}
