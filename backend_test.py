#!/usr/bin/env python3
"""
Backend API Testing for Ask DD Landing Page Contact Form
Tests the POST /api/contact endpoint with various scenarios
"""

import requests
import json
import os
import sys
from datetime import datetime

# Get backend URL from frontend .env
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

class ContactAPITester:
    def __init__(self):
        self.backend_url = get_backend_url()
        if not self.backend_url:
            raise Exception("Could not get REACT_APP_BACKEND_URL from frontend/.env")
        
        self.api_url = f"{self.backend_url}/api/contact"
        self.test_results = []
        
        print(f"Testing Contact API at: {self.api_url}")
        print("=" * 60)
    
    def log_result(self, test_name, success, details):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        self.test_results.append({
            'test': test_name,
            'success': success,
            'details': details
        })
        print(f"{status} {test_name}")
        if details:
            print(f"    Details: {details}")
        print()
    
    def test_valid_submission_with_website(self):
        """Test valid contact form submission with website"""
        test_data = {
            "name": "Sarah Johnson",
            "email": "sarah.johnson@techcorp.com",
            "location": "Australia",
            "website": "https://techcorp.com"
        }
        
        try:
            response = requests.post(self.api_url, json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'message' in data:
                    self.log_result(
                        "Valid submission with website",
                        True,
                        f"Status: {response.status_code}, Message: {data['message']}"
                    )
                else:
                    self.log_result(
                        "Valid submission with website",
                        False,
                        f"Invalid response format: {data}"
                    )
            else:
                self.log_result(
                    "Valid submission with website",
                    False,
                    f"Status: {response.status_code}, Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Valid submission with website",
                False,
                f"Request failed: {str(e)}"
            )
    
    def test_valid_submission_without_website(self):
        """Test valid contact form submission without website"""
        test_data = {
            "name": "Michael Chen",
            "email": "michael.chen@startup.co.nz",
            "location": "New Zealand"
        }
        
        try:
            response = requests.post(self.api_url, json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'message' in data:
                    self.log_result(
                        "Valid submission without website",
                        True,
                        f"Status: {response.status_code}, Message: {data['message']}"
                    )
                else:
                    self.log_result(
                        "Valid submission without website",
                        False,
                        f"Invalid response format: {data}"
                    )
            else:
                self.log_result(
                    "Valid submission without website",
                    False,
                    f"Status: {response.status_code}, Response: {response.text}"
                )
                
        except Exception as e:
            self.log_result(
                "Valid submission without website",
                False,
                f"Request failed: {str(e)}"
            )
    
    def test_missing_required_fields(self):
        """Test validation for missing required fields"""
        test_cases = [
            ({}, "All fields missing"),
            ({"email": "test@example.com", "location": "USA"}, "Missing name"),
            ({"name": "John Doe", "location": "USA"}, "Missing email"),
            ({"name": "John Doe", "email": "test@example.com"}, "Missing location"),
        ]
        
        for test_data, description in test_cases:
            try:
                response = requests.post(self.api_url, json=test_data, timeout=10)
                
                if response.status_code in [400, 422]:
                    self.log_result(
                        f"Validation - {description}",
                        True,
                        f"Correctly rejected with status {response.status_code}"
                    )
                else:
                    self.log_result(
                        f"Validation - {description}",
                        False,
                        f"Expected 400/422, got {response.status_code}: {response.text}"
                    )
                    
            except Exception as e:
                self.log_result(
                    f"Validation - {description}",
                    False,
                    f"Request failed: {str(e)}"
                )
    
    def test_invalid_email_format(self):
        """Test validation for invalid email formats"""
        invalid_emails = [
            "invalid-email",
            "test@",
            "@example.com",
            "test..test@example.com",
            "test@example",
        ]
        
        for email in invalid_emails:
            test_data = {
                "name": "Test User",
                "email": email,
                "location": "Test Location"
            }
            
            try:
                response = requests.post(self.api_url, json=test_data, timeout=10)
                
                if response.status_code in [400, 422]:
                    self.log_result(
                        f"Invalid email validation - {email}",
                        True,
                        f"Correctly rejected with status {response.status_code}"
                    )
                else:
                    self.log_result(
                        f"Invalid email validation - {email}",
                        False,
                        f"Expected 400/422, got {response.status_code}: {response.text}"
                    )
                    
            except Exception as e:
                self.log_result(
                    f"Invalid email validation - {email}",
                    False,
                    f"Request failed: {str(e)}"
                )
    
    def test_invalid_website_format(self):
        """Test validation for invalid website URLs"""
        invalid_websites = [
            "not-a-url",
            "ftp://example.com",
            "example.com",  # Missing protocol
            "http://",
            "https://",
        ]
        
        for website in invalid_websites:
            test_data = {
                "name": "Test User",
                "email": "test@example.com",
                "location": "Test Location",
                "website": website
            }
            
            try:
                response = requests.post(self.api_url, json=test_data, timeout=10)
                
                if response.status_code in [400, 422]:
                    self.log_result(
                        f"Invalid website validation - {website}",
                        True,
                        f"Correctly rejected with status {response.status_code}"
                    )
                else:
                    self.log_result(
                        f"Invalid website validation - {website}",
                        False,
                        f"Expected 400/422, got {response.status_code}: {response.text}"
                    )
                    
            except Exception as e:
                self.log_result(
                    f"Invalid website validation - {website}",
                    False,
                    f"Request failed: {str(e)}"
                )
    
    def test_api_connectivity(self):
        """Test basic API connectivity"""
        try:
            # Test root endpoint first
            root_url = f"{self.backend_url}/api/"
            response = requests.get(root_url, timeout=10)
            
            if response.status_code == 200:
                self.log_result(
                    "API connectivity",
                    True,
                    f"Backend API is accessible at {self.backend_url}"
                )
            else:
                self.log_result(
                    "API connectivity",
                    False,
                    f"Backend API returned status {response.status_code}"
                )
                
        except Exception as e:
            self.log_result(
                "API connectivity",
                False,
                f"Cannot connect to backend: {str(e)}"
            )
    
    def run_all_tests(self):
        """Run all test cases"""
        print(f"Starting Contact API Tests - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()
        
        # Test API connectivity first
        self.test_api_connectivity()
        
        # Test valid submissions
        self.test_valid_submission_with_website()
        self.test_valid_submission_without_website()
        
        # Test validation errors
        self.test_missing_required_fields()
        self.test_invalid_email_format()
        self.test_invalid_website_format()
        
        # Print summary
        self.print_summary()
    
    def print_summary(self):
        """Print test summary"""
        print("=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result['success'])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        print()
        
        # Show failed tests
        failed_tests = [result for result in self.test_results if not result['success']]
        if failed_tests:
            print("FAILED TESTS:")
            for test in failed_tests:
                print(f"❌ {test['test']}: {test['details']}")
        else:
            print("🎉 All tests passed!")
        
        print()

def main():
    """Main test execution"""
    try:
        tester = ContactAPITester()
        tester.run_all_tests()
        
        # Return exit code based on results
        failed_count = sum(1 for result in tester.test_results if not result['success'])
        sys.exit(0 if failed_count == 0 else 1)
        
    except Exception as e:
        print(f"❌ Test setup failed: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()