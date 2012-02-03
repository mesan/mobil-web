package no.mesan.android.mobilweb.kontroller;

import no.mesan.android.mobilweb.R;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebViewController extends Activity {

    private static String TAG = "mobilweb";
    private WebView myWebView;

    /**
     * Laster viewet.
     *
     * {@inheritDoc}
     */
    @Override
    public void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.i(TAG, "onCreate");
        setContentView(R.layout.main);

        myWebView = (WebView) findViewById(R.id.webview);

        // Sørger for at klikk på linker åpner i appen, og ikke i nettleseren
        myWebView.setWebViewClient(new MyWebViewClient());

        // Laster fra lokal jetty
//        myWebView.loadUrl("http://10.0.2.2:8080");

        // Laster samme app, ute på nettet
        myWebView.loadUrl("http://mobil-web-server.appspot.com/");
    }

    /**
     * Sørger for at back-knappen navigerer i websidene i appen, istedenfor å gå til forrige app.
     *
     * {@inheritDoc}
     */
    @Override
    public boolean onKeyDown(final int keyCode, final KeyEvent event) {
        // Check if the key event was the BACK key and if there's history
        if ((keyCode == KeyEvent.KEYCODE_BACK) && myWebView.canGoBack()) {
            myWebView.goBack();
            return true;
        }
        // If it wasn't the BACK key or there's no web page history, bubble up to the default
        // system behavior (probably exit the activity)
        return super.onKeyDown(keyCode, event);
    }

    /**
     * Klasse som sørger for at "lokale" url'er laster i app'en, og eksterne laster i nettleseren.
     */
    private class MyWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(final WebView view, final String url) {
            if (Uri.parse(url).getHost().equals("mobil-web-server.appspot.com")) {
                // This is my web site, so do not override; let my WebView load the page
                return false;
            }
            // Otherwise, the link is not for a page on my site, so launch another Activity that handles URLs
            final Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            startActivity(intent);
            return true;
        }
    }
}
