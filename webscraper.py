# import requests
# from bs4 import BeautifulSoup

# # Making a GET request
# r = requests.get('https://www.w3schools.com/references/index.php')

# # Parsing the HTML
# HtmlContent = BeautifulSoup(r.content, 'html.parser')

# Raw_Data = HtmlContent.find_all("a",class_ = "ga-nav")


# def Find_Link(inputs):
#     output=  []
#     for input in inputs:
#         input = input["href"]
#         if input != "javascript:void(0);":
#             output.append("https://www.w3schools.com"+input)
#     return output

# Links_w3schools = Find_Link(Raw_Data)
# print(Links_w3schools)
