import 'package:flutter/material.dart';
import 'package:reviveposhan/colors.dart';
import 'package:reviveposhan/src/screens/homeScreen.dart';
import 'package:reviveposhan/src/screens/loginScreen.dart';
import 'package:reviveposhan/src/screens/splashScreen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primaryColor: AppColors.primaryColor,
          focusColor: AppColors.accentColor,
          textTheme: TextTheme(
            bodyText1: TextStyle(
                color: AppColors.textColor), // Set primary text color to black
          ),
        ),
        home: SplashScreen());
  }
}
