package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class IconModuleModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public IconModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
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
}
