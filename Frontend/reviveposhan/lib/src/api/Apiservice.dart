import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String apiUrl = 'http://192.168.1.4:3000';

  static Future<Map<String, dynamic>> login(
      String email, String password) async {
    final request = http.Request('POST', Uri.parse('$apiUrl/user/login'));
    request.body = '{"email": "$email", "password": "$password"}';
    request.headers.addAll({
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Accept': '*/*'
    });

    final response = await http.Client().send(request);

    print('Response status code: ${response.statusCode}');
    final responseBody = await response.stream.bytesToString();
    print('Response body: $responseBody');

    if (response.statusCode == 200) {
      return json.decode(responseBody);
    } else {
      throw Exception('Failed to login');
    }
  }

  static Future<Map<String, dynamic>> register(
      String email, String password, String type, String typeid) async {
    final response = await http.post(Uri.parse('$apiUrl/register'), body: {
      'email': email,
      'password': password,
      'type': type,
      'typeid': typeid
    });
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to register');
    }
  }

  static Future<Map<String, dynamic>> createRetailer(
      String name, String address, String phone) async {
    final response = await http.post(Uri.parse('$apiUrl/createRetailer'),
        body: {'name': name, 'address': address, 'phone': phone});
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to create retailer');
    }
  }

  static Future<Map<String, dynamic>> createCharity(
      String name, String address, String phone) async {
    final response = await http.post(Uri.parse('$apiUrl/createCharity'),
        body: {'name': name, 'address': address, 'phone': phone});
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to create charity');
    }
  }
}
