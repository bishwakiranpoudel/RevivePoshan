import 'package:flutter/material.dart';
import 'dart:async';
import 'package:reviveposhan/src/screens/loginScreen.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(
        Duration(seconds: 2),
        () => Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => LoginScreen()),
            ));
  }

  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Image.asset('assets/banner.png'),
    );
  }
}
