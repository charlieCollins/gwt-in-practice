/*
 * ConfigurationDisplay.java
 *
 * Created on July 18, 2006, 7:57 PM
 *
 * Copyright Robert Cooper, Temple of the Screaming Penguin
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 */

package com.totsp.sotu.app;

import java.awt.AWTException;

/**
 *
 * @author  cooper
 */
public class ConfigurationDisplay extends javax.swing.JFrame {
    
    Configuration config;
    private boolean inEvent = false;
    
    /** Creates new form ConfigurationDisplay */
    public ConfigurationDisplay(final Configuration config ) {
        initComponents();
        this.config = config;
        this.height.setText( "" + config.getHeight() );
        this.width.setText( "" + config.getWidth() );
        this.serverUrl.setText( config.getServerUrl() );
        this.conversation.setText( config.getConversationName() );
        this.update.setText(""+ config.getMaxUpdateInterval() );
        this.password.setText( ""+config.getAdminPassword() );
        
        
        
    }
    
    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    // <editor-fold defaultstate="collapsed" desc=" Generated Code ">//GEN-BEGIN:initComponents
    private void initComponents() {
        jButton1 = new javax.swing.JButton();
        widthLabel = new javax.swing.JLabel();
        width = new javax.swing.JTextField();
        heightLabel = new javax.swing.JLabel();
        height = new javax.swing.JTextField();
        updateLabel = new javax.swing.JLabel();
        update = new javax.swing.JTextField();
        serverUrlLabel = new javax.swing.JLabel();
        serverUrl = new javax.swing.JTextField();
        apply = new javax.swing.JButton();
        conversationLabel = new javax.swing.JLabel();
        conversation = new javax.swing.JTextField();
        password = new javax.swing.JPasswordField();

        jButton1.setText("jButton1");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        addWindowListener(new java.awt.event.WindowAdapter() {
            public void windowClosed(java.awt.event.WindowEvent evt) {
                formWindowClosed(evt);
            }
        });

        widthLabel.setText("Width:");

        width.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                widthFocusLost(evt);
            }
        });
        width.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                widthKeyTyped(evt);
            }
        });

        heightLabel.setText("Height:");

        height.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                heightActionPerformed(evt);
            }
        });
        height.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                heightFocusLost(evt);
            }
        });
        height.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                heightKeyTyped(evt);
            }
        });

        updateLabel.setText("Update:");

        update.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                updateFocusLost(evt);
            }
        });
        update.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                updateKeyTyped(evt);
            }
        });

        serverUrlLabel.setText("URL:");

        serverUrl.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                serverUrlFocusLost(evt);
            }
        });
        serverUrl.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                serverUrlKeyTyped(evt);
            }
        });

        apply.setText("Apply");
        apply.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                applyMouseClicked(evt);
            }
        });

        conversationLabel.setText("Conversation/Password:");

        conversation.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                conversationFocusLost(evt);
            }
        });
        conversation.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                conversationKeyTyped(evt);
            }
        });

        password.setText("jPasswordField1");
        password.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusLost(java.awt.event.FocusEvent evt) {
                passwordFocusLost(evt);
            }
        });
        password.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                passwordKeyTyped(evt);
            }
        });

        org.jdesktop.layout.GroupLayout layout = new org.jdesktop.layout.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)
            .add(layout.createSequentialGroup()
                .add(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING, false)
                    .add(layout.createSequentialGroup()
                        .add(serverUrlLabel)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(serverUrl))
                    .add(layout.createSequentialGroup()
                        .add(widthLabel)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(width, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 98, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                .add(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)
                    .add(layout.createSequentialGroup()
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(heightLabel)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(height, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 126, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(updateLabel)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(update, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 189, Short.MAX_VALUE))
                    .add(layout.createSequentialGroup()
                        .add(conversationLabel)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(conversation, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 185, Short.MAX_VALUE)
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(password, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, 81, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                .add(apply))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)
            .add(layout.createSequentialGroup()
                .add(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)
                    .add(layout.createSequentialGroup()
                        .add(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)
                            .add(widthLabel)
                            .add(updateLabel)
                            .add(height, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)
                            .add(width, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)
                            .add(update, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)
                            .add(heightLabel))
                        .addPreferredGap(org.jdesktop.layout.LayoutStyle.RELATED)
                        .add(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.LEADING)
                            .add(serverUrlLabel)
                            .add(layout.createParallelGroup(org.jdesktop.layout.GroupLayout.BASELINE)
                                .add(conversationLabel)
                                .add(password, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)
                                .add(serverUrl, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE)
                                .add(conversation, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, org.jdesktop.layout.GroupLayout.PREFERRED_SIZE))))
                    .add(apply, org.jdesktop.layout.GroupLayout.DEFAULT_SIZE, 55, Short.MAX_VALUE))
                .addContainerGap())
        );
        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void passwordFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_passwordFocusLost
        config.setAdminPassword(  password.getText()  );
    }//GEN-LAST:event_passwordFocusLost

    private void conversationFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_conversationFocusLost
        config.setConversationName( conversation.getText() );
    }//GEN-LAST:event_conversationFocusLost
    
    private void serverUrlFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_serverUrlFocusLost
        config.setServerUrl(  serverUrl.getText() );
    }//GEN-LAST:event_serverUrlFocusLost
    
    private void updateFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_updateFocusLost
        config.setMaxUpdateInterval( Long.parseLong( update.getText() ) );
    }//GEN-LAST:event_updateFocusLost
    
    private void heightFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_heightFocusLost
        
        config.setHeight( Integer.parseInt( height.getText() ) );
    }//GEN-LAST:event_heightFocusLost
    
    private void widthFocusLost(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_widthFocusLost
        config.setWidth( Integer.parseInt( width.getText() ) );
    }//GEN-LAST:event_widthFocusLost
    
    private void passwordKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_passwordKeyTyped
        config.setAdminPassword(  password.getText()  );
    }//GEN-LAST:event_passwordKeyTyped
    
    private void conversationKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_conversationKeyTyped
        config.setConversationName( conversation.getText() );
    }//GEN-LAST:event_conversationKeyTyped
    
    private void serverUrlKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_serverUrlKeyTyped
        config.setServerUrl(  serverUrl.getText() );
    }//GEN-LAST:event_serverUrlKeyTyped
    
    private void updateKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_updateKeyTyped
        config.setMaxUpdateInterval( Long.parseLong( update.getText() ) );
    }//GEN-LAST:event_updateKeyTyped
    
    private void heightKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_heightKeyTyped
        config.setHeight( Integer.parseInt( height.getText() ) );
    }//GEN-LAST:event_heightKeyTyped
    
    private void widthKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_widthKeyTyped
        config.setWidth( Integer.parseInt( width.getText() ) );
    }//GEN-LAST:event_widthKeyTyped
    
    private void applyMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_applyMouseClicked
        if( Main.watcher != null ){
            Main.watcher.stop();
        }
        try{
            Main.watcher = new ScreenAreaWatcher( config );
        } catch( AWTException e ){
            e.printStackTrace();
            System.exit(-1);
        }
    }//GEN-LAST:event_applyMouseClicked
    
    private void formWindowClosed(java.awt.event.WindowEvent evt) {//GEN-FIRST:event_formWindowClosed
        System.exit(0);
    }//GEN-LAST:event_formWindowClosed
    
    private void heightActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_heightActionPerformed
// TODO add your handling code here:
    }//GEN-LAST:event_heightActionPerformed
    
    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton apply;
    private javax.swing.JTextField conversation;
    private javax.swing.JLabel conversationLabel;
    private javax.swing.JTextField height;
    private javax.swing.JLabel heightLabel;
    private javax.swing.JButton jButton1;
    private javax.swing.JPasswordField password;
    private javax.swing.JTextField serverUrl;
    private javax.swing.JLabel serverUrlLabel;
    private javax.swing.JTextField update;
    private javax.swing.JLabel updateLabel;
    private javax.swing.JTextField width;
    private javax.swing.JLabel widthLabel;
    // End of variables declaration//GEN-END:variables
    
}