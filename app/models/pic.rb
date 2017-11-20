class Pic < ApplicationRecord
    belongs_to :user

    has_attached_file :image, styles: lambda { |attachment| { thumb: (attachment.instance.boss? ? "300x300>" : "100x100>") } }
end
