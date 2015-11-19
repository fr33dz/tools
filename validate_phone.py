def validate_phone(phone):
    import re
    #phone = "0557766915"
    ##Telephone portable
    ##Telephone fixe
    regexp1 = r"^0[0-9]([ .-]?[0-9]{2}){4}$"
    regexp2 = r"^0([ .-]?[0-9]{2}){4}$"
    if re.match(regexp1, phone) or re.match(regexp2, phone):
        return True
    else:
        return False

def main():
    print(validate_phone("0557766915"))

if __name__ == '__main__':
    main()
