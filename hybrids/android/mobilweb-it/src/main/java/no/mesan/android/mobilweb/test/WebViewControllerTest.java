package no.mesan.android.mobilweb.test;

import android.test.ActivityInstrumentationTestCase2;
import no.mesan.android.mobilweb.*;

public class WebViewControllerTest extends ActivityInstrumentationTestCase2<WebViewController> {

    public WebViewControllerTest() {
        super("no.mesan.android.mobilweb", WebViewController.class);
    }

    public void testActivity() {
        WebViewController activity = getActivity();
        assertNotNull(activity);
    }
}

