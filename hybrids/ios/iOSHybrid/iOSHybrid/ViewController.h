//
//  ViewController.h
//  iOSHybrid
//
//  Created by adm on 2/3/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController <UIActionSheetDelegate, UIAlertViewDelegate, UIWebViewDelegate>

-(IBAction)lastHjemmeSide;
-(IBAction)lastForrigeSide;
-(IBAction)lastNesteSide;

-(BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;

@property (retain) IBOutlet UIWebView *webView;
@property (retain) IBOutlet UIButton *testKnapp;
@property (retain) IBOutlet UILabel *testLabel;

@end
