import 'package:flutter/material.dart';
import 'package:reviveposhan/colors.dart';
import 'package:reviveposhan/src/api/Apiservice.dart';
import 'package:reviveposhan/src/screens/homeScreen.dart';
import 'package:reviveposhan/src/screens/loginScreen.dart';

class RegisterScreen extends StatefulWidget {
  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 350,
                child: Stack(
                  children: [
                    ClipPath(
                      clipper: MyClipper(),
                      child: Container(
                        height: 250,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              AppColors.primaryColor,
                              AppColors.accentColor,
                            ],
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                          ),
                        ),
                      ),
                    ),
                    Positioned(
                      top: 140,
                      left: MediaQuery.of(context).size.width / 2 - 75,
                      child: Container(
                        width: 150,
                        height: 150,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                          image: DecorationImage(
                            image: AssetImage('assets/banner.png'),
                            fit: BoxFit.cover,
                          ),
                          border: Border.all(
                            color: Colors.white,
                            width: 5,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Email field
                    Container(
                      width: 300.0,
                      child: TextFormField(
                        controller: _emailController,
                        keyboardType: TextInputType.emailAddress,
                        decoration: InputDecoration(
                          labelText: 'Email',
                          hintText: 'Enter your email',
                          border: OutlineInputBorder(),
                          focusedBorder: OutlineInputBorder(
                            borderSide:
                                BorderSide(color: AppColors.primaryColor),
                          ),
                          labelStyle:
                              TextStyle(color: AppColors.textaccentColor),
                        ),
                        cursorColor: AppColors.textColor,
                      ),
                    ),

                    SizedBox(height: 20.0),

                    // Password field
                    Container(
                      width: 300.0,
                      child: TextFormField(
                        controller: _passwordController,
                        obscureText: true,
                        decoration: InputDecoration(
                          labelText: 'Password',
                          hintText: 'Enter your password',
                          border: OutlineInputBorder(),
                          focusedBorder: OutlineInputBorder(
                            borderSide:
                                BorderSide(color: AppColors.primaryColor),
                          ),
                          labelStyle:
                              TextStyle(color: AppColors.textaccentColor),
                        ),
                        cursorColor: AppColors.textColor,
                      ),
                    ),

                    SizedBox(height: 30.0),

                    // Login and register buttons
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      ElevatedButton(
                        onPressed: () async {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => Home()),
                          );
                        },
                        style: ElevatedButton.styleFrom(
                          primary: AppColors.primaryColor,
                          padding: EdgeInsets.symmetric(
                            horizontal: 50.0,
                            vertical: 15.0,
                          ),
                        ),
                        child: Text('Next'),
                      ),
                      SizedBox(width: 20.0),
                      TextButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => LoginScreen()),
                          );
                        },
                        style: TextButton.styleFrom(
                          primary: AppColors
                              .primaryColor, // Set the text color to blue
                        ),
                        child: Text('Login'),
                      ),
                    ]),
                  ],
                ),
              ),
            ],
          ),
        ));
  }
}

class MyClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    Path path = Path();
    path.lineTo(0, size.height - 50);
    path.quadraticBezierTo(
        size.width / 2, size.height, size.width, size.height - 50);
    path.lineTo(size.width, 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) => false;
}
