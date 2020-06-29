class ErrorHandler {
    public static void main(String[] args) {
        try {
            errorHappens();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    private static void errorHappens() throws Exception {
        throw new Exception("This is an error");
    }
}
