using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Tasks;

namespace HybridPhone7
{
    public partial class MainPage : PhoneApplicationPage
    {
        private List<string> _backStack = new List<string>();
        private const String SERVER_ADDRESS = "http://localhost:8080";

        // Constructor
        public MainPage()
        {
            InitializeComponent();
            webBrowser1.IsScriptEnabled = true;


            webBrowser1.Loaded += (object sender, RoutedEventArgs e) =>
            {
                webBrowser1.Navigate(new Uri(SERVER_ADDRESS, UriKind.Absolute));
            };

        }


        private void webBrowser1_Navigating(object sender, NavigatingEventArgs e)
        {
            if (!e.Uri.AbsoluteUri.Contains(SERVER_ADDRESS))
            {
                e.Cancel = true;
                WebBrowserTask task = new WebBrowserTask();
                task.Uri = e.Uri;
                task.Show();
            }
        }

        private void webBrowser1_Navigated(object sender, NavigationEventArgs e)
        {
            if (e.Uri.AbsoluteUri.Contains(SERVER_ADDRESS))
            {
                string url = webBrowser1.Source.OriginalString;

                // ensure all slashes are the same
                // app\www/index.html
                // see: https://issues.apache.org/jira/browse/CB-184
                url = url.Replace("\\", "/");

                if (_backStack.Count < 2)
                {
                    _backStack.Add(url);
                }
                else
                {
                    // check whether the URL represents a backwards navigation
                    string previousPage = _backStack[_backStack.Count - 2];
                    if (previousPage == url)
                    {
                        _backStack.RemoveAt(_backStack.Count - 1);
                    }
                }
            }
        }

        protected override void OnBackKeyPress(System.ComponentModel.CancelEventArgs e)
        {
            // if we have items in the back-stack, route this event
            // to the browser
            if (_backStack.Count > 1)
            {

                webBrowser1.InvokeScript("eval", "history.go(-1)");
                e.Cancel = true;
            }
        }
    }

}