import 'package:flutter/material.dart';
import 'dart:async';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // Timer(
    //     Duration(seconds: 2),
    //     () => Navigator.push(
    //           context,
    //           MaterialPageRoute(builder: (context) => SigninForm()),
    //         ));
  }

  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Image.asset('assets/banner.png'),
    );
  }
}
