//
//  ViewController.m
//  iOSHybrid
//
//  Created by adm on 2/3/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import "ViewController.h"

static NSString *const DEVICEEVENT = @".iOS";

//static NSString *const DOMENE = @"http://www.progressiv.no/";
//static NSString *const HJEMMESIDE = @"http://www.progressiv.no";


//static NSString *const DOMENE = @"http://localhost:8181/";
//static NSString *const HJEMMESIDE = @"http://localhost:8181/index.html";
///static NSString *const HJEMMESIDE = @"http://localhost:8181/modernizr.html";

static NSString *const DOMENE = @"http://mobil-web-server.appspot.com/";
static NSString *const HJEMMESIDE = @"http://mobil-web-server.appspot.com/";
//static NSString *const HJEMMESIDE = @"http://html5test.com/";

static NSString *const JAVASCRIPT = @"document.getElementById('innhold').innerHTML = 'haha dette virker';"
    "document.title;";    

@implementation ViewController
@synthesize webView;
@synthesize testKnapp;
@synthesize testLabel;


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    
    [self lastHjemmeSide];
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
}

- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
}

- (void)viewWillDisappear:(BOOL)animated
{
	[super viewWillDisappear:animated];
}

- (void)viewDidDisappear:(BOOL)animated
{
	[super viewDidDisappear:animated];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone) {
        return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
    } else {
        return YES;
    }
}

-(IBAction)lastHjemmeSide {
    NSURL *url =  [[NSURL alloc] initWithString:HJEMMESIDE];    
    NSURLRequest *urlRequest = [[NSURLRequest alloc] initWithURL:url];
    [webView loadRequest:urlRequest];
}

-(IBAction)lastJavascript {
    NSString *resultat = [webView stringByEvaluatingJavaScriptFromString:JAVASCRIPT];  
    [testLabel setText:resultat];
}

-(IBAction)lastForrigeSide{
    [webView goBack];
}

-(IBAction)lastNesteSide{
    [webView goForward];
}

-(BOOL)sidenTilhorerApplikasjonen:(NSString *)urlSomString {
    return [urlSomString hasPrefix: DOMENE];
}

-(BOOL)erJavaScriptTilDeviceKall:(NSString*)urlSomString {
    return ([urlSomString hasSuffix:DEVICEEVENT]);
}

//  Webview eventer

- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
    if (navigationType == UIWebViewNavigationTypeLinkClicked) {
        NSURL *requestUrl =[request URL]; 
        NSString *urlSomString = [requestUrl absoluteString];
        
        if ([self erJavaScriptTilDeviceKall:urlSomString]) {
            [self lastJavascript];
            return NO;
        } else  if ([self sidenTilhorerApplikasjonen:urlSomString]) {
            return YES;
        } else  {
            if ([[UIApplication sharedApplication]canOpenURL:requestUrl]) {
            [[UIApplication sharedApplication] openURL:requestUrl];
                return NO;
            }
        }
        return NO;
    }
    return YES;
}

-(void)webViewDidFinishLoad:(UIWebView *)webView {
    // naturlig sted å sjekke siden for om det skal ha støtte for app-integrasjon
}

@end
