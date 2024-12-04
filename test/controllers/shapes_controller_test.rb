require "test_helper"

class ShapesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get shapes_index_url
    assert_response :success
  end

  test "should get show" do
    get shapes_show_url
    assert_response :success
  end
end
