package io.github.muntashirakon.AppManager.utils;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.SharedPreferences;

import java.util.Map;

import androidx.annotation.IntDef;
import androidx.annotation.NonNull;
import androidx.annotation.StringDef;
import io.github.muntashirakon.AppManager.activities.MainActivity;

public class AppPref {
    private static final String PREF_NAME = "preferences";

    @StringDef(value = {
            PREF_ROOT_MODE_ENABLED,
            PREF_GLOBAL_BLOCKING_ENABLED,
            PREF_USAGE_ACCESS_ENABLED,
            PREF_MAIN_WINDOW_SORT_ORDER
    })
    public @interface PrefKey {}
    public static final String PREF_ROOT_MODE_ENABLED = "root_mode_enabled";  // boolean
    public static final String PREF_GLOBAL_BLOCKING_ENABLED = "global_blocking_enabled";  // boolean
    public static final String PREF_USAGE_ACCESS_ENABLED = "usage_access_enabled";  // boolean
    public static final String PREF_MAIN_WINDOW_SORT_ORDER = "main_window_sort_order";  // int

    @IntDef(value = {
            TYPE_BOOLEAN,
            TYPE_FLOAT,
            TYPE_INTEGER,
            TYPE_LONG,
            TYPE_STRING
    })
    public @interface Type {}
    public static final int TYPE_BOOLEAN = 0;
    public static final int TYPE_FLOAT   = 1;
    public static final int TYPE_INTEGER = 2;
    public static final int TYPE_LONG    = 3;
    public static final int TYPE_STRING  = 4;

    private static AppPref appPref;
    public static AppPref getInstance(@NonNull Context context) {
        if (appPref == null) {
            appPref = new AppPref(context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE));
        }
        return appPref;
    }

    public static @NonNull Object get(@NonNull Context context, @PrefKey String key, @Type int type) {
        return getInstance(context).getPref(key, type);
    }

    private @NonNull SharedPreferences preferences;
    private @NonNull SharedPreferences.Editor editor;

    @SuppressLint("CommitPrefEdits")
    private AppPref(@NonNull SharedPreferences preferences) {
        this.preferences = preferences;
        editor = preferences.edit();
        init();
    }

    public @NonNull Object getPref(@PrefKey String key, @Type int type) {
        Map<String, ?> prefValues = preferences.getAll();
        Object nullableValue = prefValues.get(key);
        String value = (nullableValue == null ? getDefaultValue(key) : nullableValue).toString();
        try {
            switch (type) {
                case TYPE_BOOLEAN:
                    return Boolean.valueOf(value);
                case TYPE_FLOAT:
                    return Float.valueOf(value);
                case TYPE_INTEGER:
                    return Integer.valueOf(value);
                case TYPE_LONG:
                    return Long.valueOf(value);
                case TYPE_STRING:
                    return value;
            }
        } catch (ClassCastException ignore) {}
        return value; // This shouldn't be here FIXME: Throw an exception
    }

    public void setPref(String key, Object value) {
        if (value instanceof Boolean) editor.putBoolean(key, (Boolean) value);
        else if (value instanceof Float) editor.putFloat(key, (Float) value);
        else if (value instanceof Integer) editor.putInt(key, (Integer) value);
        else if (value instanceof Long) editor.putLong(key, (Long) value);
        else if (value instanceof String) editor.putString(key, (String) value);
        editor.commit();
    }

    private void init() {
        if (!preferences.contains(PREF_ROOT_MODE_ENABLED)) {
            editor.putBoolean(PREF_ROOT_MODE_ENABLED, (Boolean) getDefaultValue(PREF_ROOT_MODE_ENABLED));
        }
        if (!preferences.contains(PREF_GLOBAL_BLOCKING_ENABLED)) {
            editor.putBoolean(PREF_GLOBAL_BLOCKING_ENABLED, (Boolean) getDefaultValue(PREF_GLOBAL_BLOCKING_ENABLED));
        }
        if (!preferences.contains(PREF_USAGE_ACCESS_ENABLED)) {
            editor.putBoolean(PREF_USAGE_ACCESS_ENABLED, (Boolean) getDefaultValue(PREF_USAGE_ACCESS_ENABLED));
        }
        if (!preferences.contains(PREF_MAIN_WINDOW_SORT_ORDER)) {
            editor.putInt(PREF_MAIN_WINDOW_SORT_ORDER, (Integer) getDefaultValue(PREF_MAIN_WINDOW_SORT_ORDER));
        }
        editor.commit();
    }

    private  @NonNull Object getDefaultValue(@NonNull @PrefKey String key) {
        switch (key) {
            case PREF_ROOT_MODE_ENABLED:
            case PREF_USAGE_ACCESS_ENABLED:
                return true;
            case PREF_GLOBAL_BLOCKING_ENABLED: return false;
            case PREF_MAIN_WINDOW_SORT_ORDER: return MainActivity.SORT_BY_APP_LABEL;
        }
        return "-1";
    }
}