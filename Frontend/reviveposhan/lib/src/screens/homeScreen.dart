import 'package:flutter/material.dart';
import 'package:google_nav_bar/google_nav_bar.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:reviveposhan/colors.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.w600);
  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Home',
      style: optionStyle,
    ),
    Text(
      'Likes',
      style: optionStyle,
    ),
    Text(
      'Search',
      style: optionStyle,
    ),
    Text(
      'Profile',
      style: optionStyle,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              blurRadius: 20,
              color: AppColors.accentColor.withOpacity(.15),
            )
          ],
        ),
        child: SafeArea(
            child: Container(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15.0, vertical: 8),
            child: GNav(
              tabBorderRadius: 6,
              rippleColor: AppColors.accentColor,
              hoverColor: Colors.grey[100]!,
              gap: 8,
              activeColor: AppColors.secondarytextColor,
              iconSize: 24,
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
              duration: Duration(milliseconds: 400),
              tabBackgroundColor: AppColors.primaryColor,
              color: AppColors.textaccentColor,
              tabs: [
                GButton(
                  icon: EvaIcons.homeOutline,
                  text: 'Home',
                  textStyle: TextStyle(
                      fontWeight: FontWeight.w500,
                      color: AppColors.backgroundColor),
                ),
                GButton(
                  icon: EvaIcons.compassOutline,
                  text: 'Map',
                  textStyle: TextStyle(
                      fontWeight: FontWeight.w500,
                      color: AppColors.backgroundColor),
                ),
                GButton(
                  icon: EvaIcons.calendarOutline,
                  text: 'Events',
                  textStyle: TextStyle(
                      fontWeight: FontWeight.w500,
                      color: AppColors.backgroundColor),
                ),
                GButton(
                  icon: EvaIcons.personOutline,
                  text: 'Profile',
                  textStyle: TextStyle(
                      fontWeight: FontWeight.w500,
                      color: AppColors.backgroundColor),
                ),
              ],
              selectedIndex: _selectedIndex,
              onTabChange: (index) {
                setState(() {
                  _selectedIndex = index;
                });
              },
            ),
          ),
        )),
      ),
    );
  }
}
