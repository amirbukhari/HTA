// ToastModule.java

package com.traffickingapp;

import android.widget.Toast;
import android.content.ComponentName;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class IconModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  IconModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
  
     private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";
    @ReactMethod
  public void show(boolean message) {
  
   
    if(message == true){
        reactContext.getPackageManager().setComponentEnabledSetting(
        new ComponentName(BuildConfig.APPLICATION_ID, "com.traffickingapp.SECRET"), 
        reactContext.getPackageManager().COMPONENT_ENABLED_STATE_ENABLED, reactContext.getPackageManager().DONT_KILL_APP);

        reactContext.getPackageManager().setComponentEnabledSetting(
        new ComponentName(BuildConfig.APPLICATION_ID, "com.traffickingapp.NOTSECRET"), 
        reactContext.getPackageManager().COMPONENT_ENABLED_STATE_DISABLED, reactContext.getPackageManager().DONT_KILL_APP);
    }
    else{
        reactContext.getPackageManager().setComponentEnabledSetting(
        new ComponentName(BuildConfig.APPLICATION_ID, "com.traffickingapp.NOTSECRET"), 
        reactContext.getPackageManager().COMPONENT_ENABLED_STATE_ENABLED, reactContext.getPackageManager().DONT_KILL_APP);

        reactContext.getPackageManager().setComponentEnabledSetting(
        new ComponentName(BuildConfig.APPLICATION_ID, "com.traffickingapp.SECRET"), 
        reactContext.getPackageManager().COMPONENT_ENABLED_STATE_DISABLED, reactContext.getPackageManager().DONT_KILL_APP);
    }
  }

  @Override
  public String getName() {
    return "IconExample";
  }
    @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

}