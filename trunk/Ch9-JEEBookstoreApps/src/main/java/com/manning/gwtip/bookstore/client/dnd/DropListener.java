/*
 * DropListener.java
 *
 * Created on March 7, 2007, 9:35 PM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package com.manning.gwtip.bookstore.client.dnd;

import com.google.gwt.user.client.ui.Widget;

/**
 *
 * @author cooper
 */
public interface DropListener {
    
    public boolean onDrop( Widget dropped );
    
}
