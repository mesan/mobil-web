package no.mesan.android.mobilweb.test;

import android.test.ActivityInstrumentationTestCase2;
import no.mesan.android.mobilweb.*;

public class HelloAndroidActivityTest extends ActivityInstrumentationTestCase2<HelloAndroidActivity> {

    public HelloAndroidActivityTest() {
        super("no.mesan.android.mobilweb", HelloAndroidActivity.class);
    }

    public void testActivity() {
        HelloAndroidActivity activity = getActivity();
        assertNotNull(activity);
    }
}

