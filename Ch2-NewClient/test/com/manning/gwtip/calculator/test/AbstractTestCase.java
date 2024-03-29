package com.manning.gwtip.calculator.test;

import junit.framework.TestCase;


/**
 * Test
 *
 */
public abstract class AbstractTestCase extends TestCase {
    /**
     * setUp happens for each TEST.
     */
    protected void setUp() {
        // setUp
        // if you want inherited behaviour here, set it and then call super.setUp in extending classes
        System.out.println(this.getClass().getName() + " " + this.getName() +
            " invoked");
    }

    /**
     * tearDown happens for each TEST.
     */
    protected void tearDown() {
        // tearDown
        // if you want inherited behaviour here, set it and then call super.tearDown in extending classes
        System.out.println(this.getClass().getName() + " " + this.getName() +
            " completed");
    }

    /**
     * Centralize a delay method.
     *
     *
     */
    public void delayTest() {
        // wait X seconds for test delay
        try {
            long delay = 15000;
            System.out.println("wait " + (delay / 1000) +
                " seconds for test delay buffer");
            Thread.sleep(delay);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
