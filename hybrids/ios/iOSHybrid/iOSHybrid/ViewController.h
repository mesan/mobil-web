//
//  ViewController.h
//  iOSHybrid
//
//  Created by adm on 2/3/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController <UIActionSheetDelegate, UIAlertViewDelegate>

-(IBAction)pageInfo;

-(IBAction)lastWebSide;

@property (retain) IBOutlet UIWebView *webView;

@end
